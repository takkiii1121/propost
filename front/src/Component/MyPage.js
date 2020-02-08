import React, {Component} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SpeakerNotes from '@material-ui/icons/SpeakerNotes';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import axios from 'axios'
import lscache from 'lscache'
import UserShow from './UserShow';
import LikePosts from './LikePosts'
import { PageColor, PageTitle, PageText, TabColor } from '../StyledComponent/Page';

export default class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            id: this.props.match.params.id,
            posts: [],
            mypage: false,
            token: lscache.get('token'),
            tabIndex: 0
        };
    }
    
    componentDidMount() {
        const { match: { params } } = this.props;
        const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
        axios
            .get(`http://localhost:3001/api/v1/users/${params.id}`, headers)
            .then(response => {
                this.setState({
                    user: response.data.user,
                    posts: response.data.posts,
                    mypage: response.data.mypage
                });
                console.log(response.data);
                })
            .catch(error => {
                console.log(error.response);
            });
    }
    
    render() {
        return(
            <PageColor>
                <PageTitle>{this.state.user.name}さんのページ</PageTitle>
                <PageText>{this.state.user.created_at}に登録しました</PageText>
                <Tabs
                onSelect={tabIndex => this.setState({tabIndex})}
                selectedIndex={this.state.tabIndex}
                >
                    <TabColor>
                    <TabList>
                        <Tab><SpeakerNotes /></Tab>
                        <Tab><FavoriteIcon /></Tab>
                    </TabList>
                    </TabColor>
                    

                    <TabPanel>
                        <UserShow id={this.state.id} user={this.state.user} posts={this.state.posts} mypage={this.state.mypage} state={this.props.location.state} />
                    </TabPanel>
                    <TabPanel>
                        <LikePosts id={this.state.id} user={this.state.user} />
                    </TabPanel>

                </Tabs>
            </PageColor>
        )
    }
}